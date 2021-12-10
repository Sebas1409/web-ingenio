export interface Usuario {
  Account?: Account;
  token?:   string;
}

export interface Account {
  id?:           string;
  name?:         string;
  email?:        string;
  role?:         string;
  last_name?:    string;
  phone?:        number;
  activated?:    boolean;
  created_date?: Date;
  image?:        string;
}

export interface Logueado {
    nombres?:          string;
    apellidos:         string;
    nombres_completos: string;
    email:             string;
    rol:               string;
    imagen:            string;
}
