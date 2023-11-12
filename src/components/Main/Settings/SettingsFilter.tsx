// @ts-nocheck
import { StyledInput } from "./StyledInput.tsx";
import styled from "styled-components";
import { DownOutlined, SlidersOutlined } from "@ant-design/icons";
import { Checkbox, Dropdown, MenuProps } from "antd";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { changeStatusFilter } from "../../../redux/AppSlice.ts";
import { useEffect, useState } from "react";

const StyledSettingsFilter = styled(StyledInput)`
  width: var(--settings-filter-width);

  .ant-input {
    display: var(--settings-filter-input-display);
    cursor: pointer;
  }

  && .ant-input-prefix {
    margin-right: var(--settings-filter-icon-margin);
  }

  .ant-input-suffix {
    display: var(--settings-filter-input-display);
  }
`;

const FilterContainer = styled.div`
  height: 36px;
  cursor: pointer;

  .ant-input-affix-wrapper {
    height: 36px;
  }
`;

export const SettingsFilter = ({
  valueFilter,
  setValueFilter,
}: {
  valueFilter: {
    guest: boolean;
    candidate: boolean;
    employee: boolean;
  };
  setValueFilter: (x: {
    guest: boolean;
    candidate: boolean;
    employee: boolean;
  }) => void;
}) => {
  const dispatch = useAppDispatch();
  const [isGuest, setIsGuest] = useState(false);
  const [isCandidate, setIsCandidate] = useState(false);
  const [isEmployee, setIsEmployeet] = useState(false);

  useEffect(() => {
    setValueFilter({
      guest: isGuest,
      candidate: isCandidate,
      employee: isEmployee,
    })
  }, [isGuest, isCandidate, isEmployee])

  const items: MenuProps["items"] = [
    {
      key: "guest",
      label: (
        <Checkbox
          name="Гость"
          onChange={(e) => {
            setIsGuest(e.target.checked);
          }}>
          Гость
        </Checkbox>
      ),
    },
    {
      key: "candidate",
      label: (
        <Checkbox
          name="Соискатель"
          onChange={(e) => {
            setIsCandidate(e.target.checked);
          }}>
          Соискатель
        </Checkbox>
      ),
    },
    {
      key: "employee",
      label: (
        <Checkbox
          name="Сотрудник"
          onChange={(e) => {
            setIsEmployeet(e.target.checked);
          }}>
          Сотрудник
        </Checkbox>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <FilterContainer>
        <StyledSettingsFilter
          bordered={false}
          value="Фильтр"
          readOnly={true}
          prefix={<SlidersOutlined />}
          suffix={<DownOutlined />}
        />
      </FilterContainer>
    </Dropdown>
  );
};
