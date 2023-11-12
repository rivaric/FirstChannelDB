import styled from "styled-components";
import { SettingsSearch } from "./SettingsSearch.tsx";
import { SettingsButton } from "./SettingsButton.tsx";
import { SettingsFilter } from "./SettingsFilter.tsx";
import { StyledButton } from "../../common/StyledButton.tsx";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux.ts";
import {
  changeInputFilter,
  changeStatusFilter,
  resetCurPage,
} from "../../../redux/AppSlice.ts";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: var(--settings-align);
  justify-content: space-between;

  .settings-left,
  .settings-right {
    margin: 8px;
  }

  .settings-left {
    h2 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
  }

  .settings-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export const Settings = ({
  valueInput,
  setValueInput,
}: {
  valueInput: string;
  setValueInput: (x: string) => void;
}) => {
  const [valueFilter, setValueFilter] = useState({
    guest: false,
    candidate: false,
    employee: false,
  });
  const [code, setCode] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (code === "Enter") {
      onClickSerch();
    }
  }, [code]);

  const onClickSerch = () => {
    dispatch(changeInputFilter(valueInput));
    dispatch(changeStatusFilter(valueFilter));
    dispatch(resetCurPage());
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledSettings>
      <div className="settings-right">
        <SettingsSearch
          valueInput={valueInput}
          setValueInput={setValueInput}
          setCode={setCode}
        />
        <SettingsFilter
          valueFilter={valueFilter}
          setValueFilter={setValueFilter}
        />
        <StyledButton onClick={onClickSerch}>Поиск</StyledButton>
        <SettingsButton />
      </div>
    </StyledSettings>
  );
};
