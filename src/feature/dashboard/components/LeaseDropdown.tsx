import { Dropdown, Menu, Space, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { onLeaseSelect } from "../../../store/effect";
interface Props {
  currentLeases: CurrentLeases[] | undefined;
}

function LeaseDropdown(props: Props) {
  const dispatch: Dispatch<any> = useDispatch();

  const onClick = ({ key }: any) => {
    const selectedLease = props?.currentLeases?.[key];
    if (selectedLease) {
      setSelectedLease(selectedLease);
      dispatch(onLeaseSelect(selectedLease));
    }
  };
  const [selectedLease, setSelectedLease] = useState<any>();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  useEffect(() => {
    const selectedLease = props?.currentLeases?.[0];
    if (selectedLease) {
      setSelectedLease(selectedLease);
      dispatch(onLeaseSelect(selectedLease));
    }
  }, [dispatch, props?.currentLeases]);

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={onClick}
          items={props?.currentLeases?.map((currentLease, index) => {
            return {
              key: index,
              label: `${currentLease.unitDisplayName} # ${currentLease.unitPrimaryDisplayName}`,
            };
          })}
        />
      }
    >
      <span onClick={(e) => e.preventDefault()}>
        <Space>
          {selectedLease ? (
            `${selectedLease?.unitDisplayName} # ${ selectedLease?.unitPrimaryDisplayName}`
          ) : (
            <Spin indicator={antIcon} />
          )}
          <DownOutlined />
        </Space>
      </span>
    </Dropdown>
  );
}

export default LeaseDropdown;
