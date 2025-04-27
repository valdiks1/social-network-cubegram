export function formatDate(date) {
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getRecordByTypeOfCube(records, type) {
  return records.filter((record) => record.name == type);
}

export function safeGetMin(records, type) {
  const record = getRecordByTypeOfCube(records, type)[0];
  return record ? record.min : undefined;
}