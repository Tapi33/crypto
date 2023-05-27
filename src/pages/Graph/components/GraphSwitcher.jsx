import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BTNS_DATA = {
  categories: [
    { title: "Prices", value: "prices", selected: true },
    { title: "Market Capitalization", value: "market_caps", selected: false },
    { title: "Total Volumes", value: "total_volumes", selected: false },
  ],
  periods: [
    { title: "24h", value: "1", selected: false },
    { title: "7d", value: "7", selected: true },
    { title: "14d", value: "14", selected: false },
    { title: "30d", value: "30", selected: false },
    { title: "90d", value: "90", selected: false },
    { title: "180d", value: "180", selected: false },
    { title: "1y", value: "365", selected: false },
    { title: "Max", value: "max", selected: false },
  ],
};

const GraphSwitcher = ({ onClick, type, className, disabled }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(BTNS_DATA[type]);
  }, [type]);

  const clickHandler = (item) => {
    setData(
      data.map((el) => {
        if (el.value === item.value) {
          return { ...el, selected: true };
        }
        return { ...el, selected: false };
      })
    );

    onClick(item.value, item.title);
  };

  return (
    <StyledGraphSwitcher className={className}>
      {data?.length &&
        data.map((item) => (
          <button
            key={item.value}
            onClick={() => clickHandler(item)}
            className={item.selected ? "active" : ""}
            disabled={disabled}
          >
            {item.title}
          </button>
        ))}
    </StyledGraphSwitcher>
  );
};

const StyledGraphSwitcher = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  button {
    background-color: var(--gray);
    padding: 5px 10px;
    border: 1px solid var(--gray-decor);
    color: var(--text-white);
    margin-top: 5px;
    min-width: max-content;
    font-size: 12px;
    @media (max-width: 760px) {
      padding: 3px 7px;
    }
    &:disabled {
      filter: brightness(80%);
    }
    &:hover {
      background-color: var(--gray-decor);
    }
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  button.active {
    background-color: var(--blue);
    color: #ffffff;
    &:hover {
      background-color: var(--blue-hover);
    }
  }
`;

export default GraphSwitcher;
