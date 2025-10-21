import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List.Root padding={5} listStyleType="none" paddingLeft={0}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="10px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
export default GenreList;
