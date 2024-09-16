import { Box, Typography } from "@mui/joy";
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';
import BaseTable from "../../../components/organism/BaseTable";
import { GetComic } from "../../../services/comic";
import { useEffect, useState } from "react";
import columns from "./GetComicCol";
import { useSelector, useDispatch } from 'react-redux';
import { selectComicList } from '../../../features/comic/comic.selectors'; 
import { requestGetComic } from "../../../features/comic/comic.actions";

const ComicList: React.FC = (): JSX.Element =>{
    const dispatch = useDispatch();
    const comics = useSelector(selectComicList); 
    const [variant, setVariant] = useState<VariantProp>('plain');
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
    const token = 'fffff';
    useEffect(() =>{
        dispatch(requestGetComic({request, token}));
    }, []);
    
    return (
        <Box sx={{overflow: "hidden"}}>
           <BaseTable rows={comics} columns={columns} variant={variant}/>
        </Box>
    );
}

export default ComicList;
