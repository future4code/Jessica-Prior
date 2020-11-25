import { postDataBase } from '../src/data/postDataBase';

// 6
test("Create Post", async () => {
    const post = {
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
    };

    await postDataBase.insertPost(post);
    const postFromDb = await postDataBase.selectPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
    });

    // 7
    test("Create Post", async () => {
        try {
            const post = {
                id: "id do post",
                title: "Título",
                content: "Conteúdo",
            };

            await postDataBase.insertPost(post);
            await postDataBase.insertPost(post);
        } catch (err) {
            expect(err).not.toBe(undefined)
        }
    });
});