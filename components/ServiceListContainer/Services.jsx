import { List, ListItem } from "@mui/material"
import Service from "./Service"

const Services = ( { services } ) => {
    return (
        <List>
            { services.map( ( service ) => {
                return (
                    <ListItem key={ service.id }>
                        <Service  { ...service } />
                    </ListItem>
                )
            } ) }
        </List>
    )
}

export default Services