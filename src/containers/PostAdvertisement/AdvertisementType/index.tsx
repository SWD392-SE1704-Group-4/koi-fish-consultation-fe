import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdvertisementTypeList } from "../../../features/advertisement/advertisement.selectors";
import { Box, FormControl, FormLabel, Radio, RadioGroup, Sheet } from "@mui/joy";
import { setAdvertisementTypeAction } from "../../../features/advertisement";
import { requestGetListAdvertisementType } from "../../../features/advertisement/advertisement.actions";

const AdvertisementType: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const advertisementType = useSelector(selectAdvertisementTypeList);
    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedType = advertisementType.find(
            (type: any) => type.id === event.target.value
        );
        if (selectedType) {
            dispatch(setAdvertisementTypeAction(selectedType));
        }
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
        dispatch(requestGetListAdvertisementType({ request }));
    }, [])
    return (
        <React.Fragment>
            <Box sx={{ width: '100%', mt: 2, mb: 2 }}>
                <FormLabel
                    id="advertisement-type-label"
                    sx={{
                        mb: 2,
                        fontWeight: 'xl',
                        textTransform: 'uppercase',
                        fontSize: 'xs',
                        letterSpacing: '0.15rem',
                    }}
                >
                    Select Advertisement Type
                </FormLabel>
                <RadioGroup
                    aria-labelledby="advertisement-type-label"
                    name="advertisement-type"
                    onChange={handleTypeChange}
                    size="lg"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1.5
                    }}
                >
                    {advertisementType?.map((type: any) => (
                        <Sheet
                            key={type.id}
                            sx={{
                                p: 2,
                                borderRadius: 'md',
                                boxShadow: 'sm',
                                flex: 1 
                            }}
                        >
                            <Radio
                                label={type.typeName}
                                overlay
                                disableIcon
                                value={type.id}
                                slotProps={{
                                    label: ({ checked }) => ({
                                        sx: {
                                            fontWeight: 'lg',
                                            fontSize: 'md',
                                            color: checked ? 'text.primary' : 'text.secondary',
                                        },
                                    }),
                                    action: ({ checked }) => ({
                                        sx: (theme) => ({
                                            ...(checked && {
                                                '--variant-borderWidth': '2px',
                                                '&&': {
                                                    borderColor: theme.vars.palette.primary[500],
                                                },
                                            }),
                                        }),
                                    }),
                                }}
                            />
                        </Sheet>
                    ))}
                </RadioGroup>
            </Box>
        </React.Fragment>
    );
}

export default AdvertisementType;
