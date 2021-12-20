import { Typography} from "@mui/material";
import { Box} from "@mui/system";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";


export default function TextClaim() {
    const [i] = useTranslation("global");

    return (
        <Stack color="white" mb='60px' >
            <Typography color="logo" fontSize="50px" fontWeight="900" variant="h4" >
            {i ("claim.claim-phrase")}
            </Typography>
            <Typography fontWeight="900" variant="h5">
            {i ("claim.catch-phrase")}
            </Typography>
            <Typography fontWeight="900" variant="h5">
            {i ("claim.catch-phrase2")}
            </Typography>
        </Stack>
    )
}