(() => {
  // función para obtener información de una película por Id
  // function getAllMovies( movieId: string ) {
  function getMovieByID(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  // function getAllMovieActors( id: string ) {
  function getMovieActorsByID(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  // function getUsuario( ActorId: string ) {
  function getActorBioByID(id: string) {
    console.log({ id });
  }

  // Crear una película
  // function movie(title: string, description: string, rating: number, cast: string[] ) {
  interface MovieProps {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }
  function createMovie({ title, description, rating, cast }: MovieProps) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  // function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {

  function checkFullname(fullName: string) {
    console.log({ fullName });
    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (checkFullname(fullName)) return false;

    console.log("Crear actor", birthdate);
    return true;
  }

  // Continuación
  // const getPayAmount = ({
  //   isDead = false,
  //   isSeparated = true,
  //   isRetired = false,
  // }) => {
  //   let result;
  //   if (isDead) {
  //     result = 1500;
  //   } else {
  //     if (isSeparated) {
  //       result = 2500;
  //     } else {
  //       if (isRetired) {
  //         result = 3000;
  //       } else {
  //         result = 4000;
  //       }
  //     }
  //   }

  //   return result;
  // };
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };

  /**
   * Modificación de la función
   */

  type EmployeeStatus = "isDead" | "isSeparated" | "isRetired";

  type PaymentAmounts = {
    [key in EmployeeStatus | "defaultAmount"]: number;
  };

  // interface PaymentAmountsWithDefault extends PaymentAmounts {
  //   defaultAmount: number;
  // }

  const paymentAmounts: PaymentAmounts = {
    isDead: 1500,
    isSeparated: 2500,
    isRetired: 3000,
    defaultAmount: 4000,
  };

  const getPayAmountCustom = (state?: EmployeeStatus): number =>
    paymentAmounts[state || "defaultAmount"];

  getPayAmountCustom();

  // ---------------------------
})();
