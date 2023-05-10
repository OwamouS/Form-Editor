import React from "react";
import { RefParameter } from "../../../Models/parameterM/types";
import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Link, Radio,
  RadioGroup,
  Select,
  TextField
} from "@mui/material";

type Props = {
  element: RefParameter;
  name: string;
};

export const RefInput = ({ element, name }: Props) => {
  const { properties } = element;
  const { hint, hidden, readonly } = properties || {};

  switch(properties?.view) {
    case "COMBOBOX":
          return (
            <div>{ readonly ?
              !hidden &&
              <Autocomplete
                disablePortal
                options={[]}
                fullWidth
                size={'small'}
                renderInput={(params) => <TextField {...params} label={name} disabled/>}
              /> :
              !hidden &&
              <Autocomplete
                disablePortal
                options={[]}
                fullWidth
                size={'small'}
                renderInput={(params) => <TextField {...params} label={name} />}
              />
            }
              <div
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  marginLeft: 5,
                  color: 'rgba(0,0,0,0.26)',
                }}
              >{hint}</div>
            </div>)
    case "RADIOGROUP":
      return (
        <div>{ readonly ?
          !hidden &&
          <FormControl style={{ marginLeft: 2 }} disabled>
            <FormLabel>Вариант</FormLabel>
            <RadioGroup>
              <FormControlLabel value="1" control={<Radio />} label="Вариант 1" />
              <FormControlLabel value="2" control={<Radio />} label="Вариант 2" />
            </RadioGroup>
          </FormControl> :
          !hidden &&
          <FormControl style={{ marginLeft: 2 }}>
            <FormLabel>Вариант</FormLabel>
            <RadioGroup>
              <FormControlLabel value="1" control={<Radio />} label="Вариант 1" />
              <FormControlLabel value="2" control={<Radio />} label="Вариант 2" />
            </RadioGroup>
          </FormControl>
        }
          <div
            style={{
              fontSize: 12,
              marginTop: 5,
              marginLeft: 5,
              color: 'rgba(0,0,0,0.26)',
            }}
          >{hint}</div>
        </div>)
    case "SELECT":
      return (<div>{ readonly ?
        !hidden && <Box disabled>
        <FormControl size={'small'} fullWidth>
          <InputLabel>{name}</InputLabel>
          <Select
            label={name}
          >
          </Select>
        </FormControl>
      </Box> :
          !hidden && <Box>
            <FormControl size={'small'} fullWidth>
              <InputLabel>{name}</InputLabel>
              <Select
                label={name}
              >
              </Select>
            </FormControl>
          </Box>
      }
          <div
            style={{
              fontSize: 12,
              marginTop: 5,
              marginLeft: 5,
              color: 'rgba(0,0,0,0.26)',
            }}
          >{hint}</div>
      </div>
      )
    case "LINK":
    default:
      return (
        <div>{ readonly ?
          !hidden && <Link component="button" variant="body2" disabled>{name}</Link> :
          !hidden && <Link component="button" variant="body2">{name}</Link>
        }
          <div
            style={{
              fontSize: 12,
              marginTop: 5,
              marginLeft: 5,
              color: 'rgba(0,0,0,0.26)',
            }}
          >{hint}</div>
        </div>
      );
    }
};
