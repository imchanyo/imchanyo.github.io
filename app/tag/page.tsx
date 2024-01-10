import { allWritings } from 'contentlayer/generated';
import TagComponent from '~/components/tag-component';

export default function Tag() {
  const uniqueTags = [
    ...new Set(allWritings.flatMap((item) => item.tags || [])),
  ];

  const groupedItems = uniqueTags.map((tag) => ({
    tag: tag,
    items: allWritings.filter((item) => item?.tags && item.tags.includes(tag)),
  }));

  return (
    <>
      {groupedItems?.length > 0 ? (
        <TagComponent uniqueTags={uniqueTags} groupedItems={groupedItems} />
      ) : null}
    </>
  );
}
