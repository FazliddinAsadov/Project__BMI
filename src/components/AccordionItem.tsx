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
          <SegmentControlItem
            maruzaLink="one/oneLecture"
            amaliyLink="one/onePractic"
            tajribaLink="one/oneExpirence"
            videoLink="one/oneVideo"
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="flexibility">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.second}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem
            maruzaLink="two/twoLecture"
            amaliyLink="two/twoPractic"
            tajribaLink="two/twoExpirence"
            videoLink="two/twoVideo"
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="rhree">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.third}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem
            maruzaLink="three/threeLecture"
            amaliyLink="three/threePractic"
            tajribaLink="three/threeExpirence"
            videoLink="three/threeVideo"
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="four">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.fourth}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem
            maruzaLink="four/fourLecture"
            amaliyLink="four/fourPractic"
            tajribaLink="four/fourExpirence"
            videoLink="four/fourVideo"
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="five">
        <Accordion.Control>
          <Text sx={{ fontSize: "14px" }}>{locale.fifth}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <SegmentControlItem
            maruzaLink="five/fiveLecture"
            amaliyLink="five/fivePractic"
            tajribaLink="five/fiveExpirence"
            videoLink="five/fiveVideo"
          />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionItem;
