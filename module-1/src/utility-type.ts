{

    // Utility Types.

    // Record Property.

    // Example 1: Basic Record usagen ================================

    type UserRoles = Record<"admin" | "user" | "guest", boolean>;

    const roles: UserRoles = {
    admin: true,
    user: false,
    guest: true,
    };

    // Example 2: Record with string keys and number values

    type AgeMap = Record<string, number>;

    const ages: AgeMap = {
    Alice: 30,
    Bob: 25,
    };

    // Example 2: Basic Pick usage ====================================

    interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    }

    // Create a type with only `id` and `name` properties
    type BasicUserInfo = Pick<User, "id" | "name">;

    const user: BasicUserInfo = {
    id: 1,
    name: "Alice",
    // email and isAdmin are not allowed here
    };


    // Example 3: Basic Omit usage =====================================

    interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    }

    type PublicUser = Omit<User, "isAdmin">;

    const publicUser: PublicUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    // isAdmin is omitted here
    };

    // Example 4: Required property ============================================

    interface Users {
    id: number;
    names?: string;
    emails?: string;
    }

    // Create a type where all properties are required
    type CompleteUser = Required<Users>;

    const users: CompleteUser = {
    id: 1,
    names: "Alice",
    emails: "alice@example.com",
    // name and email are required here
    };

    // Example :5 Partial property ============================================

    interface User1 {
    id: number;
    name: string;
    email: string;
    }

    // Create a type where all properties are optional
    type PartialUser = Partial<User1>;

    const user1: PartialUser = {
    id: 1,
    // name and email are optional here
    };

    // Example 6 : ReadOnly property ============================================

    interface User2 {
    id: number;
    name: string;
    }

    const user2: Readonly<User2> = {
    id: 1,
    name: "Alice"
    };

    // Trying to modify properties will cause a TypeScript error
    user2.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
    user2.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property





}