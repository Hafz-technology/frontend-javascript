// task_5/js/main.ts

/**
 * Interface for MajorCredits.
 * Contains a unique brand property to
 * distinguish it from other types.
 */
export interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // Nominal typing brand
}

/**
 * Interface for MinorCredits.
 * Contains a unique brand property to
 * distinguish it from other types.
 */
export interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // Nominal typing brand
}

/**
 * Sums the credits of two MajorCredits subjects.
 * @param subject1 - The first MajorCredits subject
 * @param subject2 - The second MajorCredits subject
 * @returns A new MajorCredits object with the summed credits
 */
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits', // Maintain the brand
  };
}

/**
 * Sums the credits of two MinorCredits subjects.
 * @param subject1 - The first MinorCredits subject
 *POST /v1/conversation/messages
 * @param subject2 - The second MinorCredits subject
 * @returns A new MinorCredits object with the summed credits
 */
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits', // Maintain the brand
  };
}
