import React, { useContext } from 'react';
import { Card, Avatar } from 'antd';
import { ClientContext } from '../../context';
import { useHistory } from 'react-router-dom';

const VisitedStoreCard = (props) => {
  const context = useContext(ClientContext);
  const history = useHistory();
  const { setActiveStoreId } = context;
  const { Meta } = Card;
  const { storeId, storeImage, storeName, storeAddress } = props;
  return (
    <Card
      onClick={() => {
        setActiveStoreId(storeId);
        history.push('/store');
      }}
      style={{
        width: '100%',
        marginTop: 16,
        borderRadius: '10px',
        boxShadow: '5px 5px 5px 0px #bdbdbd',
      }}
    >
      <Meta
        avatar={
          <Avatar
            style={{
              borderRadius: '10px',
              border: '1px solid #bdbdbd',
            }}
            shape="square"
            size={120}
            src={storeImage}
          />
        }
        title={storeName}
        description={storeAddress}
      />
    </Card>
  );
};

export default VisitedStoreCard;
