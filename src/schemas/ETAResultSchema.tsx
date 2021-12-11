import * as yup from "yup";

type ETAResultType = {
  "platform_list": Array<{
    "platform_id": number;
    "route_list": Array<{
      "train_length": number,
      "route_no": string,
      "time_en": string,
      "dest_en": string,
    }>
  }>;
};

const schema = yup.object().shape({
  "platform_list": yup.array().of(yup.object().shape({
    "platform_id": yup.number().required(),
    "route_list": yup.array().of(yup.object().shape({
      "train_length": yup.number().integer().positive().required(),
      "route_no": yup.string().required(),
      "time_en": yup.string().required(),
      "dest_en": yup.string().required(),
    }).required()).required(),
  }).required()).required(),
}).required();

export type { ETAResultType };
export default schema;
