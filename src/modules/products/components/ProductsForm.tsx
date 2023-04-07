// @flow
import * as React from "react";
import { FC } from "react";
import { useProductFormContext } from "@web/modules/products/components/productFormContext";
import {
  Box,
  Button,
  Group,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import ImageUploader from "@web/components/UploadImage/UploadImage";

type Props = {
  onSubmit: <T>(data: T) => void;
};

export const ProductsForm: FC<Props> = ({ onSubmit: onSubmitProduct }) => {
  const imagesRef = React.useRef<string[]>([]);
  console.log(imagesRef);

  const { getInputProps, onSubmit } = useProductFormContext();

  const handleSubmit = onSubmit(onSubmitProduct);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextInput label="Name" placeholder="name" {...getInputProps("name")} />
      {/* <TextInput
        label="Image"
        placeholder="temporary"
        {...getInputProps("image")}
      /> */}

      <ImageUploader urlRef={imagesRef} />
      <NumberInput
        hideControls
        label="Price"
        placeholder="price"
        {...getInputProps("price")}
      />
      <Textarea
        label="Description"
        placeholder="description"
        {...getInputProps("description")}
      />
      <Select
        label="Category"
        placeholder="category"
        data={[
          { value: "640759769dc76ae89ac9b2bb", label: "Home" },
          { value: "640759769dc76ae89ac9b2bb", label: "Accessories" },
          { value: "640759769dc76ae89ac9b2bb", label: "Cakes" },
        ]}
        {...getInputProps("category")}
      />

      <Group position="right" mt={12}>
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
};
