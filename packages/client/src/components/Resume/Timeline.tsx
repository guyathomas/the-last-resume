import React from "react";
import ContentEditable from "react-contenteditable";

import styled from "@emotion/styled";
import { CONSTANTS } from "styles";
import { SectionButton } from "./styles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box } from "@mui/material";
import cleanInput from 'utils/cleanInput'

interface TimelineProps {
  date?: string;
  company?: string;
  title?: string;
  details?: string;
  className?: string;
  contentEditable?: boolean;
  allowRemove?: boolean;
  allowMoveUp?: boolean;
  allowMoveDown?: boolean;
  allowAdd?: boolean;
  onRemove?: () => void;
  onAdd?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onChange?: (fieldValue: TimelineFieldNames, value: string) => void;
}

const TimelineOuter = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  @media ${CONSTANTS.DESKTOP} {
    grid-gap: 2rem;
    grid-template-columns: 1fr 2fr;
  }
`;

const TimelineTitles = styled.div``;
const TimelineDetails = styled.div``;

// eslint-disable-next-line
// @ts-ignore
const TimelineCompany = styled(ContentEditable)`
  margin: 1rem 0 1rem;
  @media print {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
// eslint-disable-next-line
// @ts-ignore
const TimelineTitle = styled(ContentEditable)`
  margin: 0;
  font-size: 0.8rem;
  margin: 1rem 0 1rem;
  @media print {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

// eslint-disable-next-line
// @ts-ignore
const TimelineDate = styled(ContentEditable)`
  opacity: 0.6;
  font-size: 0.7rem;
  margin: 1rem 0 1rem;
  @media print {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

// eslint-disable-next-line
// @ts-ignore
const TimelineDetailsContent = styled(ContentEditable)`
  & li {
    @media only print {
      font-size: 85%;
      margin-bottom: 0.5rem;
    }
  }
  & ul {
    margin-left: 0;
    margin-top: 1rem;
    padding-left: 0.5rem;
    list-style-position: outside;
    @media only print {
      margin-bottom: 0;
      margin-top: 0.5rem;
    }
  }
`;

type TimelineFieldNames = any;

const ActionContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: 2rem;
  @media ${CONSTANTS.DESKTOP} {
    right: -2rem;
  }
`;

const Timeline: React.FC<TimelineProps> = ({
  date = "",
  company = "",
  title = "",
  details = "",
  className = "",
  contentEditable = false,
  onRemove,
  onAdd,
  onChange,
  allowRemove,
  allowAdd,
  onMoveUp,
  allowMoveUp,
  allowMoveDown,
  onMoveDown,
}) => {
  return (
    <TimelineOuter className={className}>
      {contentEditable && (
        <ActionContainer>
          {allowAdd && (
            <SectionButton type="button" actionType="positive" onClick={onAdd}>
              <AddIcon />
            </SectionButton>
          )}
          {allowRemove && (
            <SectionButton
              type="button"
              onClick={onRemove}
              actionType="negative"
            >
              <RemoveIcon />
            </SectionButton>
          )}
          {allowMoveUp && (
            <SectionButton
              type="button"
              onClick={onMoveUp}
              actionType="neutral"
            >
              <ArrowUpwardIcon />
            </SectionButton>
          )}
          {allowMoveDown && (
            <SectionButton
              type="button"
              onClick={onMoveDown}
              actionType="neutral"
            >
              <ArrowDownwardIcon />
            </SectionButton>
          )}
        </ActionContainer>
      )}
      <TimelineTitles>
        <TimelineCompany
          html={company}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange("company", cleanInput(event.target.value));
            }
          }}
          tagName="h3"
        />
        <TimelineDate
          html={date}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange("date", cleanInput(event.target.value));
            }
          }}
          tagName="h3"
        />
        <TimelineTitle
          html={title}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange("title", cleanInput(event.target.value));
            }
          }}
          tagName="h4"
        />
      </TimelineTitles>
      <TimelineDetails>
        <TimelineDetailsContent
          html={details}
          style={{}}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange(`details`, cleanInput(event.target.value));
            }
          }}
          tagName="div"
        />
      </TimelineDetails>
    </TimelineOuter>
  );
};

export default Timeline;
