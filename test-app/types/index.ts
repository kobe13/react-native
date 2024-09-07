export type ShipProps = {
  id: string;
  name: string;
  image: string;
};

export type ShipsData = {
  ships: ShipProps[] | undefined;
};
