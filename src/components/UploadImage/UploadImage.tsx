import {
  Box,
  Button,
  Group,
  Image,
  SimpleGrid,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type ImageUploaderProps = {
  urlRef: any;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ urlRef }) => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const theme = useMantineTheme();

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);

    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        alt="None"
        width="100%"
        height={100}
        sx={{
          objectFit: "contain",
          borderRadius: "md",
          border: `1px solid ${
            theme.colors.gray[theme.colorScheme === "dark" ? 6 : 2]
          }`,
        }}
      />
    );
  });

  console.log(previews);

  useEffect(() => {
    if (files?.length > 0) {
      setStatus("loading");

      files.forEach((file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        urlRef.current = [...urlRef.current];

        // uploadImage(formData, {
        //   onSuccess: (data) => {
        //     urlRef.current = [...urlRef.current, data.file];
        //     setStatus("done");
        //   },
        //   onError: (err) => {
        //     urlRef.current = [];
        //     console.error(err);
        //     setStatus("idle");
        //     setFiles([]);
        //   },
        // });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <Box>
      {previews.length === 0 ? (
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onReject={(files) => console.warn("rejected files", files)}
          onDrop={(files) => setFiles(files)}
          maxSize={3 * 1024 * 1024}
          my={15}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: rem(20), pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                size="3.2rem"
                stroke={1.5}
                color={
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === "dark" ? 4 : 6
                  ]
                }
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size="3.2rem"
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size="3.2rem" stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
            </div>
          </Group>
        </Dropzone>
      ) : (
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onReject={(files) => console.warn("rejected files", files)}
          onDrop={(files) => setFiles(files)}
          maxSize={3 * 1024 * 1024}
          my={15}
        >
          <SimpleGrid
            cols={1}
            breakpoints={[{ maxWidth: "sm", cols: 2 }]}
            mt={previews.length > 0 ? "xl" : 0}
          >
            {previews}
          </SimpleGrid>
        </Dropzone>
      )}
    </Box>
  );
};

export default ImageUploader;
