import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>({
    
        appBar: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
          heading: {
            color: 'rgba(0,183,255, 1)',
          },
          image: {
            justifyContent: 'center',
           alignItems: 'center',
            height: '30px',
            marginLeft: '6px',
            marginBottom: '4px',
          },
}));