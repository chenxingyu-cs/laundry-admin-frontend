
export function fromAuthorityLevel(authorityLevel) {
  let roleName = '';
  switch (authorityLevel) {
    case 100:
      roleName = '超级管理员';
      break;
    case 200:
      roleName = '管理员';
      break;
    case 300:
      roleName = '维修员';
      break;
    case 400:
      roleName = '合作方';
      break;
    default:
      roleName = '错误';
  }
  return roleName;
}


export const ROLE_DATA_FOR_PICKER = [
  // {
  //   label: '超级管理员',
  //   value: '100',
  // },
  {
    label: '管理员',
    value: '200',
  },
  {
    label: '修理员',
    value: '300',
  },
  {
    label: '观察员',
    value: '400',
  },
];
