

export function fromIdList(idList) {
  const newList = idList.map((item) => {
    const newItem = {
      label: item.name,
      value: item.id,
    };
    return newItem;
  });
  return newList;
}
