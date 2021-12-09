import { Typography} from "@mui/material";
import { Box} from "@mui/system";
import { useTranslation } from "react-i18next";


export default function TextClaim() {
    const [i, i18n] = useTranslation("global");

    return (
        <Box p="20px" color="white" >
            <Typography color="logo" fontSize="30px" fontWeight="900" variant="h1" >
            {i ("claim.claim-phrase")}
            </Typography>
            <Typography fontWeight="900" variant="p">
            {i ("claim.catch-phrase")}
            </Typography>

        </Box>
    )
}