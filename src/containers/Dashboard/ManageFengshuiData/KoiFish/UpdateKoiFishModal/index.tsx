import { Box, Modal, ModalClose, Sheet, Typography, Input, Button, Grid, FormLabel, Select, Option, ListItemDecorator, SelectOption } from "@mui/joy";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectKoiFish, selectUpdateKoiFishModalOpen, selectFenghsuiElementList, selectFengshuiInfo } from "../../../../../features/fengshui/fengshui.selectors";
import { setFengshuiErrorAction, setUpdateKoiFishModalOpenAction, setFengshuiStatusAction } from "../../../../../features/fengshui";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { fengShuiElementLogos } from "../../../../../constants/Fengshui/Logo";
import { useSnackbar } from "notistack";
import { requestUpdateKoiFish } from "../../../../../features/fengshui/fengshui.actions";

// Validation schema using Yup
const KoiFishSchema = Yup.object().shape({
  koiFishName: Yup.string().required("Required"),
  koiFishColor: Yup.string().required("Required"),
  koiFishSize: Yup.number().required("Required").positive(),
  koiFishAge: Yup.number().required("Required").positive(),
  koiFishPrice: Yup.number().required("Required").positive(),
  koiFishDescription: Yup.string().required("Required"),
  energyType: Yup.string().required("Required"),
  symbolicMeaning: Yup.string().required("Required"),
  favorableNumber: Yup.number().required("Required").positive(),
  favorableColor: Yup.string().required("Required"),
  koiFishOrigin: Yup.string().required("Required"),
  fengshuiElement: Yup.string().required("Required"),
});
const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;
const UpdateKoiFishModal: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const open = useSelector(selectUpdateKoiFishModalOpen);
  const koiFish = useSelector(selectKoiFish);
  const fengshuiElements = useSelector(selectFenghsuiElementList);

  const [imageFiles, setImageFiles] = React.useState<any>([]);

  

  const initialValues = {
    koiFishName: koiFish?.koiFishName || "",
    koiFishColor: koiFish?.koiFishColor || "",
    koiFishSize: koiFish?.koiFishSize || 0,
    koiFishAge: koiFish?.koiFishAge || 0,
    koiFishPrice: koiFish?.koiFishPrice || 0,
    koiFishDescription: koiFish?.koiFishDescription || "",
    energyType: koiFish?.energyType || "",
    symbolicMeaning: koiFish?.symbolicMeaning || "",
    favorableNumber: koiFish?.favorableNumber || 0,
    favorableColor: koiFish?.favorableColor || "",
    koiFishOrigin: koiFish?.koiFishOrigin || "",
    fengshuiElement: koiFish?.fengshuiElement?.elementId || "",
  };

  React.useEffect(() => {
    if (koiFish?.koiFishPictures)
      setImageFiles(koiFish?.koiFishPictures);
  }, [koiFish])

  const handleSubmit = (values: any) => {
    const koiFishPictures = imageFiles
      .filter((img: any) => typeof img === "string")
      .map((img: any) => img);

    const newKoiFishPictures = imageFiles
      .filter((file: any) => file instanceof File)
      .map((file: any) => file);
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    formData.append("koiFishId", koiFish?.id);
    newKoiFishPictures.forEach((file: File) => {
      formData.append("newKoiFishPictures", file);
    });

    koiFishPictures.forEach((picture: string) => {
      formData.append("koiFishPictures", picture);
    });
    dispatch(requestUpdateKoiFish({ request: formData }));
  };


  // Define styles for inputs, labels, and buttons
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

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => dispatch(setUpdateKoiFishModalOpenAction(false))}
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
          Update Koi Fish Information
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={KoiFishSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={2}>
                {/* Form Field Wrapper */}
                {[
                  { name: "koiFishName", label: "Koi Fish Name", placeholder: "Koi Fish Name" },
                  { name: "koiFishColor", label: "Color", placeholder: "Color" },
                  { name: "koiFishSize", label: "Size (cm)", placeholder: "Size (cm)", type: "number" },
                  { name: "koiFishAge", label: "Age (years)", placeholder: "Age (years)", type: "number" },
                  { name: "koiFishPrice", label: "Price", placeholder: "Price", type: "number" },
                  { name: "energyType", label: "Energy Type", placeholder: "Energy Type" },
                  { name: "symbolicMeaning", label: "Symbolic Meaning", placeholder: "Symbolic Meaning" },
                  { name: "favorableNumber", label: "Favorable Number", placeholder: "Favorable Number", type: "number" },
                  { name: "favorableColor", label: "Favorable Color", placeholder: "Favorable Color" },
                  { name: "koiFishOrigin", label: "Origin", placeholder: "Origin" },
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
                            sx={inputStyles} // Apply input styles
                          />
                        )}
                      </Field>
                    </Box>
                  </Grid>
                ))}

                {/* Feng Shui Element Field */}
                <Grid xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FormLabel sx={labelStyles}>Feng Shui Element</FormLabel>
                    <Field name="fengshuiElement">
                      {({ field, form }) => (
                        <Select
                          {...field}
                          fullWidth
                          sx={{ ...inputStyles, width: '200px' }}
                          renderValue={(value) => {
                            return (
                              <React.Fragment>
                                <ListItemDecorator sx={{ marginRight: 1 }}>
                                  {fengShuiElementLogos[value?.label?.toString()]}
                                </ListItemDecorator>
                                {value.label}
                              </React.Fragment>
                            );
                          }}
                          onChange={(event, newValue) => { form.setFieldValue(field.name, newValue); }}
                        >
                          {fengshuiElements?.map((element) => (
                            <Option key={element.elementId} value={element.elementId}>
                              <React.Fragment>
                                <ListItemDecorator>
                                  {fengShuiElementLogos[element.elementName]}
                                </ListItemDecorator>
                                {element.elementName}
                              </React.Fragment>
                            </Option>
                          ))}
                        </Select>
                      )}
                    </Field>
                    {touched.fengshuiElement && errors.fengshuiElement && (
                      <Typography color="danger">
                        {typeof errors.fengshuiElement === 'string'
                          ? errors.fengshuiElement
                          : Array.isArray(errors.fengshuiElement)
                            ? errors.fengshuiElement.join(', ')
                            : ''}
                      </Typography>
                    )}
                  </Box>
                </Grid>

                {/* Description Field */}
                <Grid xs={12}>
                  <FormLabel sx={{ mb: 1 }}>Description</FormLabel>
                  <Field name="koiFishDescription">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        placeholder="Description"
                        multiline
                        minRows={3}
                        error={touched.koiFishDescription && Boolean(errors.koiFishDescription)}
                        fullWidth
                        sx={inputStyles}
                      />
                    )}
                  </Field>
                </Grid>

                {/* Koi Image Field */}
                <Grid xs={12}>
                  <FormLabel sx={{ mb: 1 }}>Picture</FormLabel>
                  <Field name="koiFishPicture">
                    {({ field }: any) => (
                      <Input
                        size="sm"
                        type="file"
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
                </Grid>

                {/* image preview*/}
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
                  </Box>)}

              </Grid>
              <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                gap: 1
              }}>
                <Button type="button" onClick={() => dispatch(setUpdateKoiFishModalOpenAction(false))} sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}>
                  Cancel
                </Button>
                <Button type="submit" sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}>
                  Update
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Sheet>
    </Modal>
  );
};

export default UpdateKoiFishModal;
