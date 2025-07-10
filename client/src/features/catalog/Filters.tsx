import { Box, Paper, Typography } from '@mui/material';
import { useFetchFiltersQuery } from './catalogApi';
import Search from './Search';
import RadioButtonGroup from '../../app/shared/components/RadioButtonGroup';
import { useAppSelector, useAppDispatch } from '../../app/store/store';
import { setBrands, setOrderBy, setTypes } from './catalogSlice';
import CheckBoxButtons from '../../app/shared/components/CheckBoxButtons';

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price: High -> low' },
    { value: 'price', label: 'Price: Low -> high' },
]
export default function Filters() {
    const { data } = useFetchFiltersQuery();
    const { orderBy,types,brands } = useAppSelector(state => state.catalog); 
    const dispatch = useAppDispatch();

    if (!data?.brands  || !data.types) return <Typography>Loading...</Typography>;

    return (
        <Box display='flex' flexDirection='column' gap={3}>
            <Paper>
                <Search />
            </Paper>
            <Paper sx={{p:3} }>
                <RadioButtonGroup
                    selectedValue={orderBy}
                    options={sortOptions}
                    onChange={e => dispatch(setOrderBy(e.target.value))}
                />
            </Paper>
            <Paper sx={{ p: 3 }}>
                <CheckBoxButtons
                    items={data.brands}
                    checked={brands}
                    onChange={(items: string[]) => dispatch(setBrands(items))}
                />
            </Paper>
            <Paper sx={{ p: 3 }}>
                <CheckBoxButtons
                    items={data.types}
                    checked={types}
                    onChange={(items: string[]) => dispatch(setTypes(items))}
                />
            </Paper>
        </Box>
    )
}