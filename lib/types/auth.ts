export type CheckCredentialsResponse = {
  pass: boolean;
  license_key: string;
  admin_email: string;
  tc_iw_is_pr: boolean;
  check_type: string;
  execution_time: number;
};
