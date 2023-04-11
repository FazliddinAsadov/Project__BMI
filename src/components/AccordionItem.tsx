import { Accordion, Text } from "@mantine/core";
import locale from "@web/translate/locale";

type Props = {};

const AccordionItem = ({ SegmentControlItem }: any) => {
  return (
    <Accordion>
      <Accordion.Item value="customization">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.first}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="flexibility">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.second}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="rhree">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.third}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="four">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.fourth}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionItem;
