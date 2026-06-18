
class Database {
    private static instance: Database;

    private constructor() {

    }
    
    static getInstance(){
        if(!this.instance){
             return this.instance = new Database(); 
        };
        
        return this.instance;
    }

    query(sql: string): void {
        console.log(`[DB] Executing: ${sql}`);
    }

    insert(table: string, data: Record<string, unknown>): void {
        console.log(`[DB] INSERT INTO ${table}`, data);
    }

    update(table: string, data: Record<string, unknown>, where: string): void {
        console.log(`[DB] UPDATE ${table} SET`, data, `WHERE ${where}`);
    }

    delete(table: string, where: string): void {
        console.log(`[DB] DELETE FROM ${table} WHERE ${where}`);
    }
    
};
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2);

db1.query('SELECT * FROM users');
db1.insert('users', { name: 'Nguyen Van A', age: 25 });
db1.update('users', { age: 26 }, 'name = "Nguyen Van A"');
db1.delete('users', 'age < 18');
