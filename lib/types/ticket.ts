export type Ticket = {
  data: {
    date_checked: string;
    payment_date: string;
    transaction_id: string;
    checksum: string;
    buyer_first: string;
    buyer_last: string;
    custom_fields: [string, string][];
    custom_field_count: number;
    allowed_checkins: number;
  };
};

export type CheckInResponse = {
  status: number;
  previous_status: string;
  pass: number;
  name: string;
  payment_date: string;
  address: string;
  city: string;
  state: string;
  country: string;
  checksum: string;
  custom_fields: [string, string][];
};
