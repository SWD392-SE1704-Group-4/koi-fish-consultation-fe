import { AspectRatio, Box, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Grid, IconButton, Input, Stack, styled, Typography } from "@mui/joy";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationError } from "yup";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import React from "react";

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const schema = yup.object().shape({
    firstname: yup.string()
        .required("First Name is required!")
        .matches(/^[a-zA-Z]+$/, 'Field cannot have numeric or special characters'),
    lastname: yup.string()
        .required("Last Name is required!")
        .matches(/^[a-zA-Z]+$/, 'Field cannot have numeric or special characters'),
    email: yup.string()
        .required("Email is required!")
        .matches(/^[^\.\s][\w\-\.{2,}]+@([\w-]+\.)+[\w-]{2,}$/, "Email is invalid!"),
    phone: yup.string()
        .matches(/^0\d{9}$/, "Invalid phone number")
})
const passwordSchema = yup.object().shape({
    currentPassword: yup.string()
        .required("Current password is required!"),
    newPassword: yup.string()
        .required("Password is required!")
        .min(8, 'Use 8 characters or more for your password')
        .matches(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, 'Password must have at least one special character!')
        .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter'),
    repeatPassword: yup.string()
        .required("Repeat password is required!")
        .oneOf([yup.ref('newPassword'), ''], 'Passwords must match'),
})

const UserInfo: React.FC = (): JSX.Element => {
    const user = {
        firstname: "doan",
        lastname: "tri",
        email: "doantri2003@gmail.com",
        phone: "123123123",
        profilePicture: "qwdqwdqwd"
    }
    const isAuthenticated = true;
    const [selectedImage, setSelectedImage] = React.useState<any>(null);
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState({
        firstname: user?.firstname || '',
        lastname: user?.lastname || '',
        email: user?.email || '',
        phone: user?.phone || '',
    });
    const [open, setOpen] = React.useState<boolean>(false);
    const [emailVerifyOpen, setEmailVerifyOpen] = React.useState<boolean>(false);
    const [uploading, setUploading] = React.useState<boolean>();
    const [passwordUploading, setPasswordUploading] = React.useState<boolean>();
    // const { enqueueSnackbar } = useSnackbar();
    React.useEffect(() => {
        setIsLoaded(false);
        if (user) {
            setFormData({
                firstname: user?.firstname,
                lastname: user?.lastname,
                email: user?.email,
                phone: user?.phone,
            })
            if (user?.profilePicture) {
                setSelectedImage(user?.profilePicture)
            }
        }
        console.log(user);
        setIsLoaded(true);
    }, [user, isAuthenticated === true])
    const handleUpdateUser = async (e: any) => {
        // try {
        //     setUploading(true);
        //     const formData = new FormData();
        //     formData.append('firstname', e.firstname);
        //     formData.append('lastname', e.lastname);
        //     formData.append('email', e.email);
        //     formData.append('phone', e.phone);
        //     if (selectedImage instanceof File) {
        //         formData.append('profilePicture', selectedImage);
        //     }
        //     console.log(formData);
        //     const result = await UpdateUser(user._id, formData);
        //     if (result) {
        //         enqueueSnackbar("Updated successully", { variant: "success" });
        //         window.location.reload();
        //     }
        // }
        // catch (error: any) {
        //     if (error instanceof ValidationError) {
        //         console.log(error.inner)
        //         error.inner.forEach((err) => {
        //             enqueueSnackbar(err.message, { variant: "error" });
        //             setUploading(false)
        //         });
        //         //enqueueSnackbar(error.inner[0].message, { variant: "error" });
        //     } else {
        //         enqueueSnackbar(`Error while updating information: ${error.response.data.message}`, { variant: "error" });
        //         setUploading(false)
        //     }
        // }
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })
    const {
        register: registerChangePassword,
        handleSubmit: handlePasswordChangeSubmit,
        formState: { errors: passwordChangeErrors }
    } = useForm({
        resolver: yupResolver(passwordSchema),
    })

    return (
        <Stack
            sx={{
                display: 'flex',
                overflow: 'hidden'
                // mx: 'auto',
                // px: { xs: 2, md: 6 },
                // py: { xs: 2, md: 3 },
            }}
        >
            {isLoaded && (
                <Card>
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Personal info</Typography>
                        <Typography level="body-sm">
                            Customize how your profile information will appear to the networks.
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: { xs: '12', md: 'flex' }, my: 1 }}
                    >
                        <Stack direction="column" spacing={1}>
                            <AspectRatio
                                ratio="1"
                                maxHeight={200}
                                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
                            >
                                {selectedImage && (
                                    <img
                                        src={typeof selectedImage === 'string' ? selectedImage : URL.createObjectURL(selectedImage)}
                                        loading="lazy"
                                        alt=""
                                    />
                                )}
                                {!selectedImage && <img
                                    src=''
                                    loading="lazy"
                                    alt=""
                                />}
                            </AspectRatio>
                            <IconButton
                                component="label"
                                aria-label="upload new picture"
                                size="sm"
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    bgcolor: 'background.body',
                                    position: 'absolute',
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    left: 100,
                                    top: 170,
                                    boxShadow: 'sm',
                                }}
                            ><VisuallyHiddenInput
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        //console.log('update image');
                                        if (e?.target?.files) {
                                            //console.log(e.target.files[0])
                                            setSelectedImage(e?.target?.files[0]);
                                        }
                                    }} />
                                <EditRoundedIcon />
                            </IconButton>
                        </Stack>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 1 }}
                                >
                                    <form onSubmit={handleSubmit(handleUpdateUser)}>
                                        <FormLabel>First name</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="First name"
                                            {...register('firstname')}
                                            defaultValue={formData.firstname}
                                        />
                                        {errors.firstname && <p>{errors.firstname.message}</p>}
                                        <FormLabel sx={{ mt: 2 }}>Last name</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Last name"
                                            defaultValue={formData.lastname}
                                            {...register('lastname')}
                                            sx={{ flexGrow: 1 }}
                                        />
                                        {errors.lastname && <p>{errors.lastname.message}</p>}
                                        <FormLabel sx={{ mt: 2 }}>Email</FormLabel>
                                        <Input
                                            size="sm"
                                            type="email"
                                            startDecorator={<EmailRoundedIcon />}
                                            placeholder="email"
                                            defaultValue={formData.email}
                                            {...register('email')}
                                            sx={{ flexGrow: 1 }}
                                        />
                                        {errors.email && <p>{errors.email.message}</p>}
                                        <FormLabel sx={{ mt: 2 }}>Phone</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Phone"
                                            {...register('phone')}
                                            defaultValue={formData.phone}
                                            sx={{ flexGrow: 1 }}
                                        />
                                        {errors.phone && <p>{errors.phone.message}</p>}
                                        {/* Add more form fields as needed */}
                                        {/* <CountrySelector
                                                value={formData.country}
                                                onChange={handleInputChange} /> */}
                                        <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 2 }}>
                                            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                                                <Button size="sm" variant="outlined" color="neutral">
                                                    Cancel
                                                </Button>
                                                {uploading ? (<Button loading size="sm" variant="solid" type='submit'>
                                                    Save
                                                </Button>) : <Button size="sm" variant="solid" type='submit'>
                                                    Save
                                                </Button>}
                                            </CardActions>
                                        </CardOverflow>
                                    </form>
                                </FormControl>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            )}
        </Stack>
    );
}

export default UserInfo;