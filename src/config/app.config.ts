interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['IT Support'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Teacher', 'IT Support'],
  tenantName: 'Organization',
  applicationName: 'gbi',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View the public information of an Organization'],
  ownerAbilities: [
    'Manage Organizations',
    'Invite Administrators and Teachers to the Organization',
    'View list of all Organizations',
  ],
};
