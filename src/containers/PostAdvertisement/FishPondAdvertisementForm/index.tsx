import React from "react";
import {
    Box, Modal, ModalClose, Sheet, Typography, Input, Button, Grid, FormLabel, Select, Option, ListItemDecorator,
    Textarea,
    Divider
} from "@mui/joy";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { selectFishPondList, selectIsFetching, selectKoiFishList } from "../../../features/fengshui/fengshui.selectors";
import { requestGetKoiFish, requestGetMyFishPond } from "../../../features/fengshui/fengshui.actions";
import { FieldNumberOutlined } from "@ant-design/icons";
import { setFengshuiErrorAction, setFishPondAction, setKoiFishAction } from "../../../features/fengshui";
import { requestCreateAdvertisement, requestGetListAdvertisementType } from "../../../features/advertisement/advertisement.actions";
import { selectUserInfo } from "../../../features/auth/auth.selectors";
import { selectAdvertisementType, selectAdvertisementTypeList, selectIsPosting } from "../../../features/advertisement/advertisement.selectors";

const AdvertisementSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .matches(/^[\p{L}\p{N} ,().]+$/u, "No special characters allowed except commas, periods, and parentheses")
        .min(25, "Title must be at least 25 words")
        .max(50, "Title cannot exceed 50 words")
        .required("Required"),

    description: Yup.string()
        .trim()
        .min(50, "Description must be at least 50 words")
        .max(255, "Description cannot exceed 255 words")
        .required("Required"), // Allows all characters

    phone: Yup.string()
        .matches(/^\+\d{2}\d{9,10}$/, "Phone number must start with '+xx' and contain 9 or 10 additional digits")
        .required("Required"),

    address: Yup.string()
        .trim()
        .matches(/^[\p{L}\p{N} ,().]+$/u, "No special characters allowed except commas, periods, and parentheses")
        .required("Required"),

    location: Yup.string()
        .trim()
        .matches(/^[\p{L}\p{N} ,().]+$/u, "No special characters allowed except commas, periods, and parentheses")
        .max(50, "Location cannot exceed 50 characters")
        .required("Required"),

    contactInfo: Yup.string()
        .trim()
        .matches(/^[\p{L}\p{N} ,().]+$/u, "No special characters allowed except commas, periods, and parentheses")
        .max(50, "Contact Info cannot exceed 50 characters")
        .required("Required"),

    fishPondId: Yup.string()
        .required("Required"),

    price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be a positive number")
        .required("Required"),

    additionalImages: Yup.array()
        .min(1, "At least 1 image is required")
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

const FishPondAdvertisementForm: React.FC<any> = (): JSX.Element => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const [error, setError] = React.useState(null);

    const isPosting = useSelector(selectIsPosting);

    const userInfo = useSelector(selectUserInfo);

    const isFetching = useSelector(selectIsFetching);

    const fishPondList = useSelector(selectFishPondList);
    const advertisementType = useSelector(selectAdvertisementType);

    const [imageFiles, setImageFiles] = React.useState<any>([]);

    const initialValues = {
        title: "",
        description: "",
        location: '',
        contactInfo: '',
        phone: userInfo.phone,
        address: userInfo.address,
        fishPondId: "",
    };

    React.useEffect(() => {
        const request = {
            appUserId: userInfo.sub
        }
        dispatch(requestGetMyFishPond({ request }));
        dispatch(requestGetListAdvertisementType({ request }));

        return () => {
            dispatch(setFishPondAction(null));
        }
    }, [])
    React.useEffect(() => {
        if ((fishPondList?.length == 0 || fishPondList == null) && isFetching == false) {
            setError("You haven't had any fish pond yet, please create fish pond fisrt!");
        }
    }, [fishPondList, isFetching])

    const handleSubmit = (values: any) => {
        var error = false;

        if (imageFiles.length == 0 || imageFiles.length >= 5) {
            error = true;
        }

        const additionalImage = imageFiles
            .filter((file: any) => file instanceof File)
            .map((file: any) => file);

        const formData = new FormData();

        formData.append("advertisementType", advertisementType.id);

        formData.append("postedBy", userInfo.sub);

        Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
        });

        additionalImage.forEach((picture: string) => {
            formData.append("additionalImages", picture);
        });

        if (!error) {
            dispatch(requestCreateAdvertisement({ request: formData }));
        }
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
                Post fish pond advertisement
            </Typography>
            {error && <p style={{ color: 'red' }}>{error}</p>}

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
                                {/* Error */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}></FormLabel>
                                    <ErrorMessage name="title">
                                        {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                    </ErrorMessage>
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
                                {/* Error */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}></FormLabel>
                                    <ErrorMessage name="description">
                                        {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                    </ErrorMessage>
                                </Box>
                            </Grid>

                            {/* Koi fish Field, quantity */}
                            <Grid xs={12} sx={{ display: 'flex', gap: 5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}>Fish pond</FormLabel>
                                    <Field name="fishPondId">
                                        {({ field, form }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                sx={{ ...inputStyles, width: '250px' }}
                                                onChange={(event, newValue) => {
                                                    form.setFieldValue(field.name, newValue);
                                                    const currentFishPond = fishPondList.find((pond: any) => pond.pondId === newValue);
                                                    dispatch(setFishPondAction(currentFishPond));
                                                }}
                                            >
                                                {fishPondList?.map((pond: any) => (
                                                    <Option key={pond?.pondId} value={pond.pondId}>
                                                        {pond.pondName}
                                                    </Option>
                                                ))}
                                            </Select>
                                        )}
                                    </Field>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}>Price ($)</FormLabel>
                                    <Field name="price">
                                        {({ field }: any) => (
                                            <Input
                                                {...field}
                                                type="number"
                                                placeholder="Price"
                                                error={touched.price && Boolean(errors.price)}
                                                fullWidth
                                                sx={inputStyles}
                                            />
                                        )}
                                    </Field>
                                </Box>
                            </Grid>
                            {/* Fish pond and price error */}
                            <Grid xs={12} sx={{ display: 'flex', gap: 5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FormLabel sx={labelStyles}></FormLabel>
                                        <Box sx={{ width: '250px' }}>
                                            <ErrorMessage name="fishPondId">
                                                {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                            </ErrorMessage>
                                        </Box>

                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FormLabel sx={labelStyles}></FormLabel>
                                        <ErrorMessage name="price">
                                            {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                        </ErrorMessage>
                                    </Box>
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
                                {/* Error */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <FormLabel sx={labelStyles}></FormLabel>
                                    {imageFiles.length == 0 && <p style={{ color: 'red' }}>{"At least 1 image file is required"}</p>}
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
                            {/* Location and contact info error*/}
                            <Grid xs={12} sx={{ display: 'flex', gap: 5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FormLabel sx={labelStyles}></FormLabel>
                                        <Box sx={{ width: '250px' }}>
                                            <ErrorMessage name="location">
                                                {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                            </ErrorMessage>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FormLabel sx={labelStyles}></FormLabel>
                                        <ErrorMessage name="contactInfo">
                                            {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                        </ErrorMessage>
                                    </Box>
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
                            {/* Phone and address error*/}
                            <Grid xs={12} sx={{ display: 'flex', gap: 5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FormLabel sx={labelStyles}></FormLabel>
                                        <Box sx={{ width: '250px' }}>
                                            <ErrorMessage name="phone">
                                                {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                            </ErrorMessage>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FormLabel sx={labelStyles}></FormLabel>
                                        <ErrorMessage name="address">
                                            {msg => <p style={{ color: 'red' }}>{msg}</p>}
                                        </ErrorMessage>
                                    </Box>
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
                                loading={isPosting}
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

export default FishPondAdvertisementForm;
