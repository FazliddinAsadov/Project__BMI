import { Drawer } from "@mantine/core";
import { FC, ReactNode } from "react";

export type FormDrawerProps = {
  title?: string;
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
};
const FormDrawer: FC<FormDrawerProps> = ({
  title,
  opened,
  onClose,
  children,
}) => {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title={title}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        position="right"
      >
        {children}
      </Drawer>
    </>
  );
};

export default FormDrawer;
