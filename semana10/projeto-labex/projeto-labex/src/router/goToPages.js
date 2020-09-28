export const goBack = (history) => {
  history.goBack();
};

export const goToApplicationFormPage = (history, id) => {
  history.push(`/inscrição/${id}`);
};

export const goToCreateTripPage = (history, id) => {
  history.push(`/criarViagem/${id}`);
};

export const goToListTripsPage = (history, id) => {
  history.push(`/listaDeViagens/${id}`);
};

export const goToLoginPage = (history, id) => {
  history.push(`/login/${id}`);
};

export const goToTripDetailsPage = (history, id) => {
  history.push(`/detalhesDaViagem/${id}`);
};

export const goToHomePage = (history) => {
  history.push("/");
};
