import React from "react";
import {
    Box, Modal, ModalClose, Sheet, Typography, Input, Button, Grid, FormLabel, Select, Option,
    Checkbox
} from "@mui/joy";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { selectCreateKoiPondModalOpen, selectFenghsuiElementList, selectFengshuiDirectionList } from "../../../../features/fengshui/fengshui.selectors";
import { setCreateKoiPondModalOpenAction, setFengshuiDirectionListAction } from "../../../../features/fengshui";
import { requestCreateFishPond, requestGetFengshuiDirectionList } from "../../../../features/fengshui/fengshui.actions";
import { selectUserInfo } from "../../../../features/auth/auth.selectors";

// Validation schema using Yup
const FishPondSchema = Yup.object().shape({
    pondName: Yup.string().required("Required"),
    pondShape: Yup.string().required("Required"),
    pondSize: Yup.number().required("Required").positive(),
    pondDepth: Yup.number().required("Required").positive(),
    pondMaterial: Yup.string().required("Required"),
    hasWaterfall: Yup.boolean().required("Required"),
    hasPlants: Yup.boolean().required("Required"),
    hasRocks: Yup.boolean().required("Required"),
    isSaltwater: Yup.boolean().required("Required"),
    numKoiFish: Yup.number().required("Required").positive(),
    waterCapacity: Yup.number().required("Required").positive(),
    pondLocation: Yup.string().required("Required"),
    pondOrientation: Yup.string().required("Required"),
});

const inputStyles = {
    borderRadius: 0,
};

const labelStyles = {
    flexShrink: 0,
    width: 120,
};

const buttonStyles = {
    mt: 2,
    color: 'white',
    borderRadius: 0,
};

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

const CreateKoiPondModal: React.FC<any> = (): JSX.Element => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const userInfo = useSelector(selectUserInfo);

    const open = useSelector(selectCreateKoiPondModalOpen);
    const pondOrientations = useSelector(selectFengshuiDirectionList);
    const [imageFiles, setImageFiles] = React.useState<any>([]);

    React.useEffect(() => {
        const request = {};
        dispatch(requestGetFengshuiDirectionList({request}))
    },[])

    const initialValues = {
        pondName: "",
        pondShape: "",
        pondSize: 0,
        pondDepth: 0,
        pondMaterial: "",
        hasWaterfall: false,
        hasPlants: false,
        hasRocks: false,
        isSaltwater: false,
        numKoiFish: 0,
        waterCapacity: 0,
        pondLocation: "",
        pondOrientation: "",
    };

    const handleSubmit = (values: any) => {
        const fishPondPictures = imageFiles.filter((file: any) => file instanceof File).map((file: any) => file);
        const formData = new FormData();

        Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
        });

        fishPondPictures.forEach((picture: File) => {
            formData.append("fishPondPictures", picture);
        });

        formData.append('createdBy', userInfo.sub);

        dispatch(requestCreateFishPond({ request: formData }));
    };

    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => dispatch(setCreateKoiPondModalOpenAction(false))}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet
                variant="outlined"
                sx={{ maxWidth: 800, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: 'lg', mb: 5 }}
                >
                    Create new fish pond
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={FishPondSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Grid container spacing={2}>
                                {/* Form Fields */}
                                {[
                                    { name: "pondName", label: "Pond Name", placeholder: "Pond Name" },
                                    { name: "pondShape", label: "Shape", placeholder: "Shape" },
                                    { name: "pondSize", label: "Size (m²)", placeholder: "Size (m²)", type: "number" },
                                    { name: "pondDepth", label: "Depth (m)", placeholder: "Depth (m)", type: "number" },
                                    { name: "pondMaterial", label: "Material", placeholder: "Material" },
                                    { name: "numKoiFish", label: "Number of Koi Fish", placeholder: "Number of Koi Fish", type: "number" },
                                    { name: "waterCapacity", label: "Water Capacity (L)", placeholder: "Water Capacity (L)", type: "number" },
                                    { name: "pondLocation", label: "Location", placeholder: "Location" },
                                ].map((fieldData, index) => (
                                    <Grid xs={6} key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <FormLabel sx={labelStyles}>{fieldData.label}</FormLabel>
                                            <Field name={fieldData.name}>
                                                {({ field }: any) => (
                                                    <Input
                                                        {...field}
                                                        placeholder={fieldData.placeholder}
                                                        type={fieldData.type || "text"}
                                                        error={touched[fieldData.name] && Boolean(errors[fieldData.name])}
                                                        fullWidth
                                                        sx={inputStyles}
                                                    />
                                                )}
                                            </Field>
                                        </Box>
                                    </Grid>
                                ))}
                                {/* Checkboxes for Boolean Fields */}
                                {[
                                    { name: "hasWaterfall", label: "Has Waterfall" },
                                    { name: "hasPlants", label: "Has Plants" },
                                    { name: "hasRocks", label: "Has Rocks" },
                                    { name: "isSaltwater", label: "Is Saltwater" },
                                ].map((checkboxData, index) => (
                                    <Grid xs={6} key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Field name={checkboxData.name} type="checkbox">
                                                {({ field }: any) => (
                                                    <Checkbox
                                                        {...field}
                                                        label={checkboxData.label}
                                                        checked={field.value}
                                                    />
                                                )}
                                            </Field>
                                        </Box>
                                    </Grid>
                                ))}
                                {/* Pond Orientation Field */}
                                <Grid xs={12}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FormLabel sx={labelStyles}>Pond Orientation</FormLabel>
                                        <Field name="pondOrientation">
                                            {({ field, form }) => (
                                                <Select
                                                    sx={inputStyles}
                                                    {...field}
                                                    fullWidth
                                                    onChange={(event, newValue) => form.setFieldValue(field.name, newValue)}
                                                >
                                                    {pondOrientations?.map((orientation) => (
                                                        <Option key={orientation.directionId} value={orientation.directionId}>
                                                            {orientation.directionName}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            )}
                                        </Field>
                                        {/* {touched.pondOrientation && errors.pondOrientation && (
                                            <Typography color="danger">{errors.pondOrientation}</Typography>
                                        )} */}
                                    </Box>
                                </Grid>

                                {/* File Upload for Images */}
                                <Grid xs={12}>
                                    <FormLabel>Pictures</FormLabel>
                                    <Input
                                        type="file"
                                        slotProps={{ input: { accept: "image/*", multiple: true } }}
                                        onChange={(e) => {
                                            const files = e?.target?.files;
                                            if (files) {
                                                if (imageFiles.length + files.length <= 5) {
                                                    setImageFiles((prev) => [...prev, ...Array.from(files)]);
                                                } else {
                                                    enqueueSnackbar(`You can only upload up to five images!`, { variant: "error" });
                                                }
                                            }
                                        }}
                                    />
                                </Grid>

                                {/* Image Preview */}
                                {imageFiles.length > 0 && (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                                        {imageFiles.map((file, index) => (
                                            <div key={index} style={{ position: 'relative', margin: '5px' }}>
                                                <img
                                                    src={typeof file === 'string' ? `${cloudfrontUrl}${file}` : URL.createObjectURL(file)}
                                                    alt="Pond Preview"
                                                    height={90}
                                                    style={{ borderRadius: '5px' }}
                                                />
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setImageFiles((prev) => prev.filter((_, i) => i !== index));
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
                                        ))}
                                    </Box>
                                )}
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'right', gap: 1, mt: 2 }}>
                                <Button onClick={() => dispatch(setCreateKoiPondModalOpenAction(false))} variant="outlined" sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}>
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary" sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}>
                                    Create
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Sheet>
        </Modal>
    );
};

export default CreateKoiPondModal;
