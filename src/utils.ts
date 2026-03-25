import { newEntrySchema, type NewDiaryEntry } from './types.ts';

const parseNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  return newEntrySchema.parse(object);
};

export default parseNewDiaryEntry;