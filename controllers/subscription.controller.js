export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription;
  } catch (error) {
    next(error);
  }
};
