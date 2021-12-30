// eslint-disable-next-line no-unused-vars
export const syntaxChecker = (err, req, res, next) => {
    if (err instanceof SyntaxError)
        return res.status(400).json({ error: 'Request body is not valid!' });

    res.status(500).send(err);
};