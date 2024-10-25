import React from "react";
import {
    Box, Modal, ModalClose, Sheet, Typography, Input, Button, Grid, FormLabel, Select, Option, ListItemDecorator,
    Textarea,
    Divider,
    Chip
} from "@mui/joy";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { selectKoiFishList } from "../../../features/fengshui/fengshui.selectors";
import { requestGetKoiFish } from "../../../features/fengshui/fengshui.actions";
import { FieldNumberOutlined } from "@ant-design/icons";
import { setKoiFishAction } from "../../../features/fengshui";
import { requestCreateAdvertisement, requestGetListAdvertisementType } from "../../../features/advertisement/advertisement.actions";
import { selectUserInfo } from "../../../features/auth/auth.selectors";
import { selectAdvertisementType, selectAdvertisementTypeList } from "../../../features/advertisement/advertisement.selectors";

// Validation schema using Yup
const AdvertisementSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    contactInfo: Yup.string().required("Required"),
    koiFishId: Yup.string().required("Required"),
});

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

const inputStyles = {
    borderRadius: 0,
};

const labelStyles = {
    flexShrink: 0,
    width: 120,
};

const buttonStyles = {
    mt: 2,
    width: '20%',
    borderRadius: 0,
};

const AdvertisementForm: React.FC<any> = (): JSX.Element => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const userInfo = useSelector(selectUserInfo);

    const koiFishList = useSelector(selectKoiFishList);
    const advertisementType = useSelector(selectAdvertisementType);

    const [imageFiles, setImageFiles] = React.useState<any>([]);

    const initialValues = {
        title: "",
        description: "",
        location: '',
        contactInfo: '',
        phone: userInfo.phone,
        address: userInfo.address,
        koiFishId: "",
    };

    React.useEffect(() => {
        const request = {
            keyword: "",
            categoryIds: [

            ],
            pagingOption: {
                pageIndex: 0,
                pageTotal: 50
            },
            sortOption: {
                field: "name",
                direction: "DESC"
            }
        }
        dispatch(requestGetKoiFish({ request }));
        dispatch(requestGetListAdvertisementType({ request }));
    }, [])

    const handleSubmit = (values: any) => {
        console.log(values);
        const additionalImage = imageFiles
            .filter((file: any) => file instanceof File)
            .map((file: any) => file);

        const formData = new FormData();

        formData.append("postedBy", userInfo.username);
        formData.append("advertisementType", advertisementType.id);

        Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
        });

        additionalImage.forEach((picture: string) => {
            formData.append("additionalImages", picture);
        });

        dispatch(requestCreateAdvertisement({ request: formData }));
    };

    return (
        <Sheet
            variant="outlined"
            sx={{ borderRadius: 'md', p: 3, boxShadow: 'lg', height: 'fit-content' }}
        >
            <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                sx={{ fontWeight: 'lg', mb: 5 }}
            >
                Post koi fish advertisement
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={AdvertisementSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Grid container spacing={2}>
                            {/* Title Field */}
                            <Grid xs={12}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}>Title</FormLabel>
                                    <Field name="title">
                                        {({ field }: any) => (
                                            <Input
                                                {...field}
                                                placeholder="Advertisement Title"
                                                error={touched.title && Boolean(errors.title)}
                                                fullWidth
                                                sx={inputStyles}
                                            />
                                        )}
                                    </Field>
                                </Box>
                            </Grid>

                            {/* Description Field */}
                            <Grid xs={12}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <FormLabel sx={labelStyles}>Description</FormLabel>
                                    <Field name="description">
                                        {({ field }: any) => (
                                            <Textarea
                                                {...field}
                                                placeholder="Description"
                                                minRows={2}
                                                maxRows={4}
                                                error={touched.description && Boolean(errors.description)}
                                                sx={{ ...inputStyles, width: '100%' }}
                                            />
                                        )}
                                    </Field>
                                </Box>
                            </Grid>

                            {/* Koi fish Field, quantity */}
                            <Grid xs={12} sx={{ display: 'flex', gap: 5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}>Koi Fish</FormLabel>
                                    <Field name="koiFishId">
                                        {({ field, form }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                sx={{ ...inputStyles, width: '200px' }}
                                                onChange={(event, newValue) => {
                                                    form.setFieldValue(field.name, newValue);
                                                    const currentKoiFish = koiFishList.find((fish: any) => fish.id === newValue);
                                                    dispatch(setKoiFishAction(currentKoiFish));
                                                }}
                                            >
                                                {koiFishList?.map((fish: any) => (
                                                    <Option key={fish?.id} value={fish.id}>
                                                        {fish.koiFishName}
                                                    </Option>
                                                ))}
                                            </Select>
                                        )}
                                    </Field>
                                </Box>

                            </Grid>

                            {/* Advertisement additional picture */}
                            <Grid xs={12}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles} >Additional Picture</FormLabel>
                                    <Field name="additionalImages">
                                        {({ field }: any) => (
                                            <Input
                                                size="sm"
                                                type="file"
                                                sx={inputStyles}
                                                slotProps={{
                                                    input: {
                                                        accept: "image/*",
                                                    }
                                                }}
                                                placeholder="Image"
                                                onChange={(e) => {
                                                    const files = e?.target?.files;
                                                    if (files) {
                                                        if (imageFiles.length < 5) {
                                                            setImageFiles((prev) => [...prev, ...Array.from(files)]);
                                                        }
                                                        else enqueueSnackbar(`You can only upload up to five images!`, { variant: "error" });
                                                    }
                                                }}
                                            />
                                        )}
                                    </Field>
                                </Box>
                                {/* Image Preview */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}></FormLabel>
                                    {imageFiles?.length !== 0 && (
                                        <Box sx={{ display: 'flex', width: 1, flexWrap: 'wrap', mt: 2 }}>
                                            {imageFiles.map(function (url, imageIndex) {
                                                return (<div style={{ position: "relative" }}>
                                                    <img src={typeof url === 'string' ? `${cloudfrontUrl + url}` : URL.createObjectURL(url)} alt="Pasted Image" height={90} style={{ borderRadius: "5px", margin: '2px' }} />
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            setImageFiles((prev) => prev.filter((_, index) => index !== imageIndex));
                                                        }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: 5,
                                                            right: 5,
                                                        }}
                                                    >
                                                        <DeleteForeverIcon />
                                                    </button>
                                                </div>
                                                )
                                            })}
                                        </Box>
                                    )}
                                </Box>
                            </Grid>

                            {/* Location and Contact info Field */}
                            <Grid xs={12} sx={{ display: 'flex', gap: 5, mt: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}>Location</FormLabel>
                                    <Field name="location">
                                        {({ field }: any) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Location"
                                                error={touched.location && Boolean(errors.location)}
                                                fullWidth
                                                sx={{ ...inputStyles, width: '250px' }}
                                            />
                                        )}
                                    </Field>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 1 }}>
                                    <FormLabel sx={labelStyles}>Contact info</FormLabel>
                                    <Field name="contactInfo">
                                        {({ field }: any) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Contact info"
                                                error={touched.contactInfo && Boolean(errors.contactInfo)}
                                                fullWidth
                                                sx={inputStyles}
                                            />
                                        )}
                                    </Field>
                                </Box>
                            </Grid>
                            {/* Phone and address */}
                            <Grid xs={12} sx={{ display: 'flex', gap: 5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}>Phone</FormLabel>
                                    <Field name="phone">
                                        {({ field }: any) => (
                                            <Input
                                                {...field}
                                                placeholder="Phone"
                                                error={touched.phone && Boolean(errors.phone)}
                                                fullWidth
                                                sx={{ ...inputStyles, width: '250px' }}
                                            />
                                        )}
                                    </Field>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 1 }}>
                                    <FormLabel sx={labelStyles}>Address</FormLabel>
                                    <Field name="address">
                                        {({ field }: any) => (
                                            <Input
                                                {...field}
                                                placeholder="Address"
                                                error={touched.quantity && Boolean(errors.quantity)}
                                                fullWidth
                                                sx={inputStyles}
                                            />
                                        )}
                                    </Field>
                                </Box>
                            </Grid>

                        </Grid>

                        <Divider sx={{ mt: 2, mb: 2 }} />

                        {/* Buttons */}
                        <Box sx={{ display: 'flex', justifyContent: 'right', gap: 1, mt: 2 }}>
                            <Button
                                type="button"
                                sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}
                            >
                                Post Advertisement
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Sheet>
    );
};

export default AdvertisementForm;
