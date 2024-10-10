export type UserRole = {
  ID: number;
  ZUID: string;
  authSource: string | null;
  authyEnabled?: boolean;
  authyPhoneCountryCode: string | null;
  authyPhoneNumber: string | null;
  authyUserID: string | null;
  createdAt: string;
  email: string;
  firstName: string;
  lastLogin: string;
  lastName: string;
  prefs: string | null;
  role: Role;
  signupInfo: string | null;
  staff: boolean;
  unverifiedEmails: string | null;
  updatedAt: string;
  verifiedEmails: string | null;
  websiteCreator: boolean;
};

export type Role = {
  ZUID: string;
  createdAt: string;
  createdByUserZUID: string;
  entityZUID: string;
  expiry: string | null;
  granularRoleZUID: string | null;
  granularRoles: GranularRole[] | null;
  name: string;
  static: boolean;
  systemRole: SystemRole;
  systemRoleZUID: string;
  updatedAt: string;
  description?: string;
};

export type SystemRole = {
  ZUID: string;
  create: boolean;
  createdAt: string;
  delete: boolean;
  grant: boolean;
  name: string;
  publish: boolean;
  read: boolean;
  super: boolean;
  update: boolean;
  updatedAt: string;
};

export type GranularRole = SystemRole & { resourceZUID: string };

export type ContentModel = {
  ZUID: string;
  masterZUID: string;
  parentZUID: string;
  description: string;
  label: string;
  metaTitle?: any;
  metaDescription?: any;
  metaKeywords?: any;
  type: ModelType;
  name: string;
  sort: number;
  listed: boolean;
  createdByUserZUID: string;
  updatedByUserZUID: string;
  createdAt: string;
  updatedAt: string;
  module?: number;
  plugin?: number;
};

export type ModelType = 'pageset' | 'templateset' | 'dataset';
