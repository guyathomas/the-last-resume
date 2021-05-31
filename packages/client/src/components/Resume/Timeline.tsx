import React from "react";
import ContentEditable from "react-contenteditable";

import styled from "@emotion/styled";
import { CONSTANTS } from "styles";
import { SectionButton } from "./styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Box } from "@material-ui/core";

interface TimelineProps {
  date?: string;
  company?: string;
  title?: string;
  details?: string;
  className?: string;
  contentEditable?: boolean;
  disableRemove?: boolean;
  onRemove?: () => void;
  onAdd?: () => void;
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

const RemoveSection = styled(SectionButton)`
  top: 3rem;
`;

const AddSection = styled(SectionButton)``;

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
  disableRemove,
}) => {
  return (
    <TimelineOuter className={className}>
      {contentEditable && (
        <ActionContainer>
          <AddSection type="button" onClick={onAdd}>
            <AddIcon />
          </AddSection>
          {!disableRemove && (
            <RemoveSection
              type="button"
              onClick={onRemove}
              actionType="negative"
            >
              <RemoveIcon />
            </RemoveSection>
          )}
        </ActionContainer>
      )}
      <TimelineTitles>
        <TimelineCompany
          html={company}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange("company", event.target.value);
            }
          }}
          tagName="h3"
        />
        <TimelineDate
          html={date}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange("date", event.target.value);
            }
          }}
          tagName="h3"
        />
        <TimelineTitle
          html={title}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange("title", event.target.value);
            }
          }}
          tagName="h4"
        />
      </TimelineTitles>
      <TimelineDetails>
        <TimelineDetailsContent
          html={details}
          disabled={!contentEditable}
          onChange={(event) => {
            if (onChange) {
              onChange(`details`, event.target.value);
            }
          }}
          tagName="div"
        />
      </TimelineDetails>
    </TimelineOuter>
  );
};

export default Timeline;
