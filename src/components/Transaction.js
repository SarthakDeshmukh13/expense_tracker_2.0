import { ListItem, ListItemText ,  styled } from "@mui/material"

const Detail = styled(ListItem)`
    margin-top:15px;
`
const Transaction = ({transaction}) => {

    const color = transaction.amount > 0 ? 'green' : 'red';
    return(
        <>
        <Detail style = {{background : color , color:'white'}}>
            <ListItemText>{transaction.text}</ListItemText> 
            <ListItemText>{transaction.amount}</ListItemText> 
        </Detail>
        </>
    )
}

export default Transaction