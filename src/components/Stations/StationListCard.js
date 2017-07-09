import React from 'react';
import { Link } from 'dva/router';
import { Accordion } from 'antd-mobile';
import styles from './StationListCard.css';
import StationListMachineCard from './StationListMachineCard';

function StationListCard({ stationList }) {
  function onChange(key) {
    console.log(key);
  }

  if (stationList) {
    return (
      <div className={styles.normal}>
        <Accordion onChange={onChange}>
          {stationList.map(station => (
            <Accordion.Panel
              key={station.id}
              header={(
                <div>
                  {station.name}
                  <Link to={`/admin/stations/edit/${station.id}`} className={styles.editLink}>
                    编辑
                  </Link>
                </div>
              )}
            >
              <StationListMachineCard machineList={station.machines} />
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    );
  } else {
    return (
      <div className={styles.normal}>
        没有洗衣机
      </div>
    );
  }
}

export default StationListCard;
