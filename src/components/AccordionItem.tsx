import { Accordion, Box } from "@mantine/core";
import { IconFolderPlus } from "@tabler/icons-react";

type Props = {};

const AccordionItem = ({ SegmentControlItem }: any) => {
  return (
    <Accordion>
      <Accordion.Item value="customization">
        <Accordion.Control>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconFolderPlus />
            1-mavzu
          </Box>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem />
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconFolderPlus />
            2-mavzu
          </Box>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionItem;
