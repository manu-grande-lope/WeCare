import { Typography} from "@mui/material";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";


export default function TextClaim() {
    const [i] = useTranslation("global");

    return (
        <Stack mb='60px' justifyContent="flex-start" flexDirection="column" maxWidth="600px">
            <Typography  fontWeight="900" variant="h4" color={'primary'}>
            {i ("claim.claim-phrase")}
            </Typography>
            <Typography  fontSize={150} fontWeight="900" variant="h2" lineHeight={1} color={'primary'} >
            WECARE
            </Typography>
            <Typography  fontWeight="900" variant="h3" lineHeight={1} color={'primary'}>
            {i ("claim.catch-phrase")}
            </Typography>
        </Stack>
    )
}