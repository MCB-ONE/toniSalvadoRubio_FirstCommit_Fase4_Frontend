import { useMemo, useState } from 'react';
import removeAccents from '../helpers/removeAccents';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      const sortKey = sortConfig.key.label;
      const { direction } = sortConfig;
      if (sortConfig.key.isTag) {
        sortableItems.sort((a, b) => {
          if (direction === 'ascending') {
            if (a[sortKey][0] > b[sortKey][0]) {
              return 1;
            }
            if (a[sortKey][0] < b[sortKey][0]) return -1;
            return 0;
          }
          if (a[sortKey][0] < b[sortKey][0]) return 1;
          if (a[sortKey][0] > b[sortKey][0]) return -1;
          return 0;
        });
      } else {
        sortableItems.sort((a, b) => {
          if (direction === 'ascending') {
            if (removeAccents(a[sortKey]) > removeAccents(b[sortKey])) return 1;
            if (removeAccents(a[sortKey]) < b[sortKey]) return -1;
            return 0;
          }
          if (removeAccents(a[sortKey][0]) < removeAccents(b[sortKey][0])) return 1;
          if (removeAccents(a[sortKey][0]) > removeAccents(b[sortKey][0])) return -1;
          return 0;
        });
      }
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig
      && sortConfig.key.label === key.label
      && sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    if (key.isTag) {
      setSortConfig({ key, direction });
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort };
};
export default useSortableData;
