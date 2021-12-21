import { Typography} from "@mui/material";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";


export default function TextClaim() {
    const [i] = useTranslation("global");

    return (
        <Stack  p={2}justifyContent="flex-start" flexDirection="column" maxWidth="600px">
            <Typography  fontWeight="900" variant="h3" color={'primary'}>
            {i ("claim.claim-phrase")}
            </Typography>
            <Typography  fontSize={140} fontWeight="900" variant="h1" lineHeight={1} color={'primary'} >
            WECARE
            </Typography>
            <Typography  fontWeight="900" variant="h3" lineHeight={1} color={'textClaim.main'}>
            {i ("claim.catch-phrase")}
            </Typography>
        </Stack>
    )
}