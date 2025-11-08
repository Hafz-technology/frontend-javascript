namespace Subjects {
  // Use declaration merging to add experienceTeachingReact
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
