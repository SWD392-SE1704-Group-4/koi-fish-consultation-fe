import { AspectRatio, Box, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Grid, IconButton, Input, Stack, styled, Typography } from "@mui/joy";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationError } from "yup";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { selectAuthInfo, selectIsLoggedIn, selectUserInfo } from "../../../../features/auth/auth.selectors";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import convertFileToBase64 from "../../../../utils/convertFileToBase64";
import { useSnackbar } from "notistack";
import { requestUpdateUser, requestUserInfo } from "../../../../features/auth/auth.actions";
import { setAuthErrorAction, setUpdateUserStatusAction } from "../../../../features/auth";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
const nameRegex = /^[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỲỴỶỸ\s]{1,20}$/;
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
        .required("First Name is required")
        .matches(nameRegex, "First Name should contain only Vietnamese letters, no special symbols, and be one word up to 20 characters"),
    lastname: yup.string()
        .required("Last Name is required")
        .matches(nameRegex, "Last Name should contain only Vietnamese letters, no special symbols, and be one word up to 20 characters"),
    email: yup.string()
        .required("Email is required!")
        .matches(/^[^\.\s][\w\-\.{2,}]+@([\w-]+\.)+[\w-]{2,}$/, "Email is invalid!"),
    phone: yup.string()
        .matches(/^\+\d{2}\d{9,10}$/, "Invalid phone number"),
    address: yup
        .string()
        .required("Address is required")
        .matches(/^\S[\s\S]{0,48}\S$/, "Invalid address"),
    gender: yup
        .string()
        .matches(/^[01]$/, 'Gender must be either 0 (Male) or 1 (Female)') // Regex to match '0' or '1'
        .required('Gender is required!'), // Ensure the field is not empty
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

const UserInfo: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const authInfo = useSelector(selectAuthInfo);
    const userInfo = useSelector(selectUserInfo);
    const [selectedImage, setSelectedImage] = React.useState<File | string | null>(null);
    const [birthdate, setBirthdate] = React.useState<string | null>(null);
    const [gender, setGender] = React.useState<string | null>(null)
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    const [emailVerifyOpen, setEmailVerifyOpen] = React.useState<boolean>(false);
    const [uploading, setUploading] = React.useState<boolean>(false);
    const [passwordUploading, setPasswordUploading] = React.useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        dispatch(requestUserInfo());
    }, [])

    React.useEffect(() => {
        setSelectedImage(userInfo.picture);
        setBirthdate(userInfo.birthday);
        setGender(userInfo.gender);
    }, [userInfo])

    useEffect(() => {
        if (authInfo.error) {
            enqueueSnackbar({ message: authInfo.error, variant: "error", autoHideDuration: 2000 })
            setUploading(false);
        }
        dispatch(setAuthErrorAction(null))
    }, [authInfo?.error]);

    useEffect(() => {
        if (authInfo.updateUserStatus) {
            enqueueSnackbar({ message: authInfo.updateUserStatus, variant: "success", autoHideDuration: 2000 })
            setUploading(false);
        }
        dispatch(setUpdateUserStatusAction(null))
    }, [authInfo?.updateUserStatus]);

    const handleUpdateUser = async (e: any) => {
        setUploading(true);
        const userName = userInfo.username;
        const family_name = e.firstname;
        const given_name = e.lastname;
        const address = e.address;
        const phone_number = e.phone;
        const gender = e.gender;
        var userPicture;
        var fileName;
        var fileType;
        const otherUserData = { given_name, family_name, address, phone_number, birthdate, gender };
        if (selectedImage instanceof File) {
            const base64Image = await convertFileToBase64(selectedImage);
            userPicture = base64Image;
            fileName = selectedImage.name;
            fileType = selectedImage.type;
        };
        dispatch(requestUpdateUser({ userName, fileName, fileType, userPicture, otherUserData }));
    };

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
                overflow: 'hidden',
                borderRadius: 0
            }}
        >
            {(!isLoaded && userInfo.sub) && (
                <Card sx={{ borderRadius: 0 }}>
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
                                    top: 110,
                                    boxShadow: 'sm',
                                }}
                            ><VisuallyHiddenInput
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e?.target?.files) {
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
                                            sx={inputStyles}
                                            size="sm"
                                            placeholder="First name"
                                            {...register('firstname')}
                                            defaultValue={userInfo.firstname}
                                        />
                                        {errors.firstname && <p>{errors.firstname.message}</p>}
                                        <FormLabel sx={{ mt: 2 }}>Last name</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Last name"
                                            defaultValue={userInfo.lastname}
                                            {...register('lastname')}
                                            sx={{ flexGrow: 1, ...inputStyles }}
                                        />
                                        {errors.lastname && <p>{errors.lastname.message}</p>}
                                        <FormLabel sx={{ mt: 2 }}>Email</FormLabel>
                                        <Input
                                            size="sm"
                                            type="email"
                                            startDecorator={<EmailRoundedIcon />}
                                            placeholder="email"
                                            readOnly
                                            defaultValue={userInfo.email}
                                            {...register('email')}
                                            sx={{ flexGrow: 1, ...inputStyles }}
                                        />
                                        {errors.email && <p>{errors.email.message}</p>}
                                        <FormLabel sx={{ mt: 2 }}>Phone</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Phone"
                                            {...register('phone')}
                                            defaultValue={userInfo.phone}
                                            sx={{ flexGrow: 1, ...inputStyles }}
                                        />
                                        {errors.phone && <p>{errors.phone.message}</p>}
                                        <FormLabel sx={{ mt: 2 }}>Address</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Address"
                                            {...register('address')}
                                            defaultValue={userInfo.address}
                                            sx={{ flexGrow: 1, ...inputStyles }}
                                        />
                                        {errors.address && <p>{errors.address.message}</p>}
                                        <Box sx={{ display: 'flex', gap: 5 }}>
                                            <div>
                                                <FormLabel sx={{ mt: 2 }}>Birth day</FormLabel>
                                                <input style={{
                                                    width: '120px',
                                                    padding: '9px',
                                                    border: '1px solid #ccc',
                                                    transition: 'border-color 0.3s',
                                                    outline: 'none',
                                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                                                }}
                                                    type="date"
                                                    id="birthday"
                                                    name="birthday"
                                                    onChange={(e) => setBirthdate(e.target.value)}
                                                    value={birthdate} />
                                            </div>
                                            <div>
                                                <FormLabel sx={{ mt: 2 }}>Gender</FormLabel>
                                                <Select sx={{ width: "120px", flexGrow: 1, ...inputStyles }}  {...register('gender')} defaultValue={userInfo?.gender}>
                                                    <Option value="">None</Option>
                                                    <Option value="0">Male</Option>
                                                    <Option value="1">Female</Option>
                                                </Select>
                                                {errors.gender && <p>{errors.gender.message}</p>}
                                            </div>
                                        </Box>


                                        <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 2 }}>
                                            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                                                <Button size="sm" variant="outlined" color="neutral" sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}>
                                                    Cancel
                                                </Button>
                                                {uploading ? (<Button loading size="sm" variant="solid" type='submit' sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}>
                                                    Save
                                                </Button>) : <Button size="sm" variant="solid" type='submit' sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}>
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

